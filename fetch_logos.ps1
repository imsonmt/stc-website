$d = Join-Path $PSScriptRoot 'assets\img\brands'
New-Item -ItemType Directory -Force $d | Out-Null
$ua = 'STCsite/1.0 (website test)'
$files = [ordered]@{
 'drager' = ('Dr' + [char]0xE4 + 'ger Logo.svg'); 'honeywell' = 'Honeywell logo.svg'; 'msa' = 'MSA Safety Logo.svg'; 'nohmi' = 'Nohmi-bosai-logo.png';
 '3m' = '3M wordmark.svg'; 'flir' = 'FLIR logo.svg'; 'kidde' = 'Kidde logo 2023.svg'
}
foreach ($k in $files.Keys) {
  $u = 'https://commons.wikimedia.org/wiki/Special:FilePath/' + [uri]::EscapeDataString($files[$k]) + '?width=400'
  curl.exe -sL -m 60 -A $ua -o "$d\$k.png" $u
  Start-Sleep -Seconds 2
  Write-Host ("{0}: {1} bytes" -f $k, (Get-Item "$d\$k.png").Length)
}
# Hochiki search variants
foreach ($q in 'Hochiki', 'Hochiki Corporation') {
  $u = 'https://commons.wikimedia.org/w/api.php?action=query&format=json&list=search&srnamespace=6&srlimit=5&srsearch=' + [uri]::EscapeDataString($q)
  Write-Host "== $q"; (curl.exe -s -m 30 -A $ua $u) | ConvertFrom-Json | % { $_.query.search | % { Write-Host "  $($_.title)" } }
}
Add-Type -AssemblyName System.Drawing
Get-ChildItem $d -Filter *.png | % { try { $i = [Drawing.Image]::FromFile($_.FullName); "$($_.Name) $($i.Width)x$($i.Height)"; $i.Dispose() } catch { "$($_.Name) INVALID" } }
