Add-Type -AssemblyName System.IO.Compression.FileSystem
$src = Get-ChildItem "D:\WPS Office" | Where-Object { $_.Name -like "*Camera*" } | Select-Object -First 1
Copy-Item $src.FullName "D:\portfolio\temp.zip" -Force
$zip = [System.IO.Compression.ZipFile]::OpenRead("D:\portfolio\temp.zip")
$e = $zip.GetEntry("word/document.xml")
$s = $e.Open()
$r = New-Object System.IO.StreamReader($s)
$x = $r.ReadToEnd()
$r.Close()
$zip.Dispose()
$ms = [regex]::Matches($x, '<w:t[^>]*>([^<]+)</w:t>')
$text = ($ms | ForEach-Object { $_.Groups[1].Value }) -join ''
Write-Output $text
