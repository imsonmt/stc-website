$ua = 'STCsite/1.0 (website test)'
$brands = 'Draeger','Honeywell','MSA Safety','Hochiki','Nohmi Bosai','3M','FLIR Systems','Kidde'
foreach ($b in $brands) {
  $u = 'https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=8&gsrsearch=' + [uri]::EscapeDataString("$b logo") + '&prop=imageinfo&iiprop=url|mime|size&iiurlwidth=400'
  $r = (curl.exe -s -m 30 -A $ua $u) | ConvertFrom-Json
  Write-Host "== $b"
  foreach ($p in ($r.query.pages.PSObject.Properties.Value | Sort-Object index)) { Write-Host ("  {0} | {1} | {2}" -f $p.index, $p.title, $p.imageinfo[0].mime) }
}
