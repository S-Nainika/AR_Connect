import qrcode

blocks = ["ADMIN BLOCK", "B1", "B2", "B3", "B4","B5","B6","B7","B8","B9","B10","B12"]

for b in blocks:
    url = f"https://s-nainika.github.io/AR_Connect/index.html?from={b}"
    img = qrcode.make(url)
    img.save(f"markers/{b}_QR.png")
