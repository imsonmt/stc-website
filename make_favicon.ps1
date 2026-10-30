Add-Type -AssemblyName System.Drawing
$out = Join-Path $PSScriptRoot 'assets\icons'
New-Item -ItemType Directory -Force $out | Out-Null
$red = [Drawing.Color]::FromArgb(215, 25, 32)

function New-Icon([int]$size, [string]$path, [bool]$round) {
  $bmp = New-Object Drawing.Bitmap $size, $size, ([Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $g = [Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = 'AntiAlias'; $g.TextRenderingHint = 'AntiAliasGridFit'; $g.Clear([Drawing.Color]::Transparent)
  $r = if ($round) { [int]($size * 0.18) } else { 0 }
  $gp = New-Object Drawing.Drawing2D.GraphicsPath
  $d = [Math]::Max(1, $r * 2)
  if ($round) {
    $gp.AddArc(0, 0, $d, $d, 180, 90); $gp.AddArc($size - $d, 0, $d, $d, 270, 90)
    $gp.AddArc($size - $d, $size - $d, $d, $d, 0, 90); $gp.AddArc(0, $size - $d, $d, $d, 90, 90); $gp.CloseFigure()
  } else { $gp.AddRectangle((New-Object Drawing.Rectangle 0, 0, $size, $size)) }
  $g.FillPath((New-Object Drawing.SolidBrush $red), $gp)
  $font = New-Object Drawing.Font 'Arial Black', ([single]($size * 0.34)), ([Drawing.FontStyle]::Regular), ([Drawing.GraphicsUnit]::Pixel)
  $sf = New-Object Drawing.StringFormat; $sf.Alignment = 'Center'; $sf.LineAlignment = 'Center'
  $rect = New-Object Drawing.RectangleF 0, ([single]($size * 0.02)), $size, $size
  $g.DrawString('STC', $font, [Drawing.Brushes]::White, $rect, $sf)
  $g.Dispose(); $bmp.Save($path, [Drawing.Imaging.ImageFormat]::Png); $bmp.Dispose()
}
New-Icon 16  "$out\favicon-16.png" $true
New-Icon 32  "$out\favicon-32.png" $true
New-Icon 48  "$out\favicon-48.png" $true
New-Icon 192 "$out\icon-192.png" $true
New-Icon 512 "$out\icon-512.png" $true
New-Icon 180 "$out\apple-touch-icon.png" $false   # iOS tự bo góc, nên để nền đỏ vuông

# favicon.ico (gói PNG 16/32/48)
$sizes = 16, 32, 48
$ms = New-Object IO.MemoryStream; $bw = New-Object IO.BinaryWriter $ms
$bw.Write([uint16]0); $bw.Write([uint16]1); $bw.Write([uint16]$sizes.Count)
$offset = 6 + 16 * $sizes.Count
$blobs = $sizes | % { ,[IO.File]::ReadAllBytes("$out\favicon-$_.png") }
for ($i = 0; $i -lt $sizes.Count; $i++) {
  $bw.Write([byte]$sizes[$i]); $bw.Write([byte]$sizes[$i]); $bw.Write([byte]0); $bw.Write([byte]0)
  $bw.Write([uint16]1); $bw.Write([uint16]32); $bw.Write([uint32]$blobs[$i].Length); $bw.Write([uint32]$offset)
  $offset += $blobs[$i].Length
}
foreach ($b in $blobs) { $bw.Write($b) }
$bw.Flush(); [IO.File]::WriteAllBytes((Join-Path $PSScriptRoot 'favicon.ico'), $ms.ToArray())

# favicon.svg (vector, sắc nét ở mọi kích thước)
$svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#d71920"/><text x="32" y="42" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-weight="900" font-size="23" fill="#fff">STC</text></svg>'
[IO.File]::WriteAllText("$out\favicon.svg", $svg)

$manifest = '{"name":"STC Safety and Technology","short_name":"STC","start_url":"index.html","display":"standalone","background_color":"#ffffff","theme_color":"#d71920","icons":[{"src":"assets/icons/icon-192.png","sizes":"192x192","type":"image/png"},{"src":"assets/icons/icon-512.png","sizes":"512x512","type":"image/png"}]}'
[IO.File]::WriteAllText((Join-Path $PSScriptRoot 'site.webmanifest'), $manifest)
Get-ChildItem $out, $PSScriptRoot -Include *.png, *.ico, *.svg, *.webmanifest -Recurse | ? { $_.FullName -notmatch 'img\\' } | % { "$($_.Name) $($_.Length)" }
