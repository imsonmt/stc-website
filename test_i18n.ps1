$edge = 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
$root = $PSScriptRoot
[Console]::OutputEncoding=[Text.Encoding]::UTF8; $vi = [regex]'[\u00C0-\u1EF9]'
foreach ($p in 'index','san-pham','dich-vu','du-an','gioi-thieu','tin-tuc','lien-he') {
  $url = ('file:///' + ($root -replace '\\','/') + "/$p.html?lang=en")
  $tmp = "$env:TEMP\dom_$p.html"; cmd /c "`"$edge`" --headless --disable-gpu --virtual-time-budget=4000 --dump-dom `"$url`" > `"$tmp`" 2>nul"; $html = [IO.File]::ReadAllText($tmp, [Text.Encoding]::UTF8)
  $html = [regex]::Replace($html, '<(script|style)[\s\S]*?</\1>', '')
  $txt = [regex]::Replace($html, '<[^>]+>', "`n")
  $bad = $txt -split "`n" | ? { $_.Trim() -and $vi.IsMatch($_) } | Select -Unique
  $attrs = [regex]::Matches($html, '(placeholder|title|alt)="([^"]*)"') | ? { $vi.IsMatch($_.Groups[2].Value) } | % { $_.Value } | Select -Unique
  Write-Host ("== {0}: html {1} chars, untranslated text {2}, attrs {3}" -f $p, $html.Length, @($bad).Count, @($attrs).Count)
  $bad | Select -First 15 | % { Write-Host ("   T: " + $_.Trim()) }
  $attrs | Select -First 5 | % { Write-Host "   A: $_" }
}
