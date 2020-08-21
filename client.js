$(function () {
    const SERVER = 'http://127.0.0.1:1350';
    console.log('Client.js okey!');

    function listeStagiaires() {

        $.get(SERVER + '/general', function (reponse) {
            console.log(reponse);

            for (i in reponse) {
                $('tbody').append(` <tr>
 <td>${reponse[i].id_stagaires}</td>
 <td>${reponse[i].prenom}</td>
 <td>${reponse[i].nom}</td>
 <td>${reponse[i].sexe}</td>
 <td>${reponse[i].formation}</td>
 <td>${reponse[i].date_inscription}</td>
 <td>${reponse[i].frais_dossier}</td>

</tr>`);
            }
        });
    }

    listeStagiaires();

    $('#general').on('click',function () {

        listeStagiaires();

    });

    $('a').on('click', function (e) {
        e.preventDefault();
        let cible = $(this).attr('href').replace('#', '/');
        console.log(cible);
        $.get(SERVER + cible, function (reponse) {
            $('tbody').html('');
            for (i in reponse) {
                $('tbody').append(` <tr>
 <td>${reponse[i].id_stagaires}</td>
 <td>${reponse[i].prenom}</td>
 <td>${reponse[i].nom}</td>
 <td>${reponse[i].sexe}</td>
 <td>${reponse[i].formation}</td>
 <td>${reponse[i].date_inscription}</td>
 <td>${reponse[i].frais_dossier}</td>

</tr>`);
            }
        });
    });


    let macarte = null;

    $('#chercher').on('click', function () {

        let adresse = $('#adresse').val();
        $('#map').html('');

        if (macarte != null) {
            macarte.off();
        }
        myAddress(adresse, 15, 'map');

    });

    function myAddress(address, zoom, idcible) {
        address = "10-12 Rue Planchat, 75020 Paris";
        url = `https://nominatim.openstreetmap.org/search/${address}?format=json&addressdetails=1&limit=1&polygon_svg=1`;

        $.get(url, function (reponse) {

            console.log(reponse[0]);

            if (typeof (reponse[0]) != 'undefined') {
                let lat = reponse[0].lat;
                let lon = reponse[0].lon;

                let container = L.DomUtil.get('map');
                if (container != null) {
                    container._leaflet_id = null;
                }

                macarte = new L.map(document.getElementById(idcible)).setView([lat, lon], zoom);


                L.tileLayer(
                    'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
                    {
                        minZoom: 1,
                        maxZoom: 20
                    }
                ).addTo(macarte);

                L.marker([lat, lon]).addTo(macarte).bindPopup(reponse[0].display_name);


            }
            else {
                $('#map').html('Adresse introuvable');
            }


        });

    }


})