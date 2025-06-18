function descargarContacto() {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
N:Morales Arroyave;Lindsay;;;
FN:Lindsay Morales Arroyave
TEL:+57 3207533462
EMAIL;TYPE=WORK: contabilidad@acerosymallas.com
NOTE: Directora Financiera
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contacto.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
