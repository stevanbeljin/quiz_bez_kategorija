# quiz_bez_kategorija

Ubacio sam prototype.init funkciju koja šalje request za JSON fajl i njegova pitanja ubacuje kao value questions key-a klase čim se inicijalizuje nova instanca klase.
Izbacio sam kategorije za sada samo dok ne rešim problem kloniranja array-a objekata koji dobijam preko JSON-a. Jer kad console-ujem uporno dobijam array sa pitanjima ali i lenght-om 0 i ne mogu da radim sa njim.
Pretpostavljam da je potrebno uraditi u jednom trenutku deep copy dobijenih podataka i tek posle toga ih koristiti dalje.
Poenta svega je da napravim novu prototype funkciju koja će odmah da filtrira jedinstvene kategorije čim init funkcija odradi svoje.
