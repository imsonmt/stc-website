$ua = 'STCsite/1.0 (product block images)'
$dir = Join-Path $PSScriptRoot 'assets\img\products'
$q = [ordered]@{
  'nvr'        = 'network video recorder'
  'ir-beam'    = 'infrared beam sensor perimeter'
  'exproof'    = 'explosion proof junction box'
  'oil-boom'   = 'oil spill containment boom'
  'absorbent'  = 'oil absorbent pads'
  'valves'     = 'industrial valves pipes'
}
foreach ($k in $q.Keys) {
  $u = 'https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=10&gsrsearch=' + [uri]::EscapeDataString($q[$k] + ' filetype:bitmap') + '&prop=imageinfo&iiprop=url|mime|size&iiurlwidth=800'
  $r = (curl.exe -s -m 30 -A $ua $u) | ConvertFrom-Json
  $n = 0
  if ($r.query -and $r.query.pages) {
    foreach ($p in ($r.query.pages.PSObject.Properties.Value | Sort-Object index)) {
      $i = $p.imageinfo[0]
      if ($i.mime -ne 'image/jpeg' -or $i.width -lt 700) { continue }
      curl.exe -sL -m 40 -A $ua -o "$dir\cand-$k-$n.jpg" $i.thumburl
      Write-Host ("{0}-{1}: {2}" -f $k, $n, $p.title)
      $n++
      Start-Sleep -Seconds 1
      if ($n -ge 3) { break }
    }
  }
}
