Add-Type -AssemblyName System.Drawing

$logoPath = "d:\R2C\src\assets\logo.png"
$outputPath = "d:\R2C\public\tab-logo.png"
$faviconPath = "d:\R2C\public\favicon.ico"

$logo = [System.Drawing.Image]::FromFile($logoPath)
$size = 128
$bmp = New-Object System.Drawing.Bitmap $size, $size
$g = [System.Drawing.Graphics]::FromImage($bmp)

$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

# Dark Metallic Gray Rounded Rectangle Path
$radius = 32
$rect = New-Object System.Drawing.Rectangle 2, 2, 124, 124
$path = New-Object System.Drawing.Drawing2D.GraphicsPath

$path.AddArc($rect.X, $rect.Y, $radius, $radius, 180, 90)
$path.AddArc(($rect.Right - $radius), $rect.Y, $radius, $radius, 270, 90)
$path.AddArc(($rect.Right - $radius), ($rect.Bottom - $radius), $radius, $radius, 0, 90)
$path.AddArc($rect.X, ($rect.Bottom - $radius), $radius, $radius, 90, 90)
$path.CloseFigure()

# Create Dark Metallic Gray Gradient (top-left #343842 to bottom-right #181A20)
$p1 = New-Object System.Drawing.Point 0, 0
$p2 = New-Object System.Drawing.Point 128, 128
$c1 = [System.Drawing.Color]::FromArgb(255, 52, 56, 66)    # Dark metallic light top
$c2 = [System.Drawing.Color]::FromArgb(255, 24, 26, 32)    # Dark metallic deep bottom
$gradBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush $p1, $p2, $c1, $c2

$g.FillPath($gradBrush, $path)

# Draw subtle metallic highlight border line
$penColor = [System.Drawing.Color]::FromArgb(255, 90, 95, 110)
$pen = New-Object System.Drawing.Pen $penColor, 2
$g.DrawPath($pen, $path)
$pen.Dispose()

# Draw logo image inside centered with padding
$padding = 16
$g.DrawImage($logo, $padding, $padding, (128 - ($padding * 2)), (128 - ($padding * 2)))

$g.Dispose()
$logo.Dispose()
$path.Dispose()
$gradBrush.Dispose()

# Save to favicon formats
$bmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Save($faviconPath, [System.Drawing.Imaging.ImageFormat]::Icon)
$bmp.Dispose()

Write-Host "Successfully generated dark metallic gray tab logo with corner radius!"
