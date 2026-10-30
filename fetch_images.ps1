$d = Join-Path $PSScriptRoot 'assets\img'
New-Item -ItemType Directory -Force "$d\products", "$d\projects" | Out-Null
$ua = 'STCsite/1.0 (website test)'
$qs = [ordered]@{
 'chua-chay'='fire extinguisher'; 'bao-chay'='smoke detector'; 'khi'='gas fire suppression cylinders'; 'do-luong'='gas detector';
 'bao-ho'='firefighter protective clothing'; 'cuu-ho'='firefighters rescue equipment'; 'cong-nghiep'='oil refinery';
 'panel'='fire alarm control panel'; 'scba'='breathing apparatus firefighter'; 'thermal'='thermal imaging camera'
 'datacenter'='data center'; 'office'='office building'; 'factory'='factory interior'; 'training'='firefighter training'; 'substation'='electrical substation'
}
$sub = @('datacenter','office','factory','training','substation')
$out = @()
foreach ($k in $qs.Keys) {
  $u = 'https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=15&gsrsearch=' + [uri]::EscapeDataString($qs[$k]) + '&prop=imageinfo&iiprop=url|extmetadata|size|mime&iiurlwidth=800'
  $json = curl.exe -s -m 30 -A $ua $u
  try { $r = $json | ConvertFrom-Json } catch { Write-Host "ERR $k"; continue }
  $n = 0
  foreach ($p in ($r.query.pages.PSObject.Properties.Value | Sort-Object index)) {
    $i = $p.imageinfo[0]
    $lic = $i.extmetadata.LicenseShortName.value
    if ($i.mime -ne 'image/jpeg' -or $i.width -lt 800 -or $lic -notmatch '^(CC0|CC BY|Public domain)') { continue }
    $folder = if ($sub -contains $k) { 'projects' } else { 'products' }
    $f = "$folder/$k-$n.jpg"
    curl.exe -s -m 60 -A $ua -o "$d\$f" $i.thumburl
    Start-Sleep -Seconds 2
    if ((Test-Path "$d\$f") -and (Get-Item "$d\$f").Length -gt 5000) {
      $out += "$f | $lic | $($p.title) | $($i.descriptionurl)"; $n++
    }
    if ($n -ge 2) { break }
  }
  Write-Host "$k -> $n"
}
$out | Set-Content "$d\CREDITS.txt" -Encoding UTF8
