function otros(){

    fetch("https://galander.calipso.work/restcalipso/restservice/SOAPEndPoint", {
  "method": "POST",
  "headers": {
    "username": "ws_user",
    "password": "54321",
    "intance": "Galander",
    "soapaction": "Movistar_CreacionGuia",
    "content-type": "application/xml"
  },
  "body": "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:wsg=\"http://wsgltech.tk/\">\n    <soapenv:Header/>\n    <soapenv:Body>\n        <wsg:SAVEOR>\n            <wsg:OOR>\n                <!--ObligatorioNuevo:-->\n                <wsg:INTERF>OTROS</wsg:INTERF>\n                <wsg:CUITCLIENT>30-67881435-7</wsg:CUITCLIENT>\n                <!--Optional:-->\n                <wsg:ANI>1127311508</wsg:ANI>\n                <wsg:APENOM>Pablo Renzo PRUEBA WS 07-07 II</wsg:APENOM>\n                <wsg:CECORIGEN>0001</wsg:CECORIGEN>\n                <wsg:CLAIMASSURA>555556</wsg:CLAIMASSURA>\n                <wsg:COMPLETITUD>CARGADOR, AUDICULARES,PORTA EQUIPO</wsg:COMPLETITUD>\n                <wsg:FABRICANTE>004</wsg:FABRICANTE>\n                <wsg:FALLA>NO CARGA; PROBLEMA DE CONECTIVIDAD, DISPLAY ROTO</wsg:FALLA>\n                <!--Optional:-->\n                <wsg:FCHFABRIC>01/10/2019</wsg:FCHFABRIC>\n                <wsg:FCHHORACR>07/07/2020 10:03</wsg:FCHHORACR>\n                <wsg:FCHVENTA>10/01/2020</wsg:FCHVENTA>\n                <wsg:IMEI>557666096697878</wsg:IMEI>\n                <wsg:MODELO>1360</wsg:MODELO>\n                <wsg:MOREPARAC>1</wsg:MOREPARAC>\n                <!--Optional:-->\n                <wsg:REITERADO>?</wsg:REITERADO>\n                <wsg:ROTURA>NO</wsg:ROTURA>\n                <wsg:SLA>72</wsg:SLA>\n                <!--Optional:-->\n                <wsg:SMS>N</wsg:SMS>\n                <!--Optional:-->\n                <wsg:SVA>03</wsg:SVA>\n                <wsg:TIPOCLIENTE>2</wsg:TIPOCLIENTE>\n                <wsg:TIPOSERV>04</wsg:TIPOSERV>\n                <!--OptionalNuevo:-->\n                <wsg:IDPRESIS>123213</wsg:IDPRESIS>\n                <wsg:TELCONT>?</wsg:TELCONT>\n                <wsg:PERGAR>SI</wsg:PERGAR>\n                <wsg:MUELTO>NO</wsg:MUELTO>\n                <wsg:IMEIMUL></wsg:IMEIMUL>\n                <wsg:CASOEXT>7765878788</wsg:CASOEXT>\n            </wsg:OOR>\n        </wsg:SAVEOR>\n    </soapenv:Body>\n</soapenv:Envelope>\n"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});

}