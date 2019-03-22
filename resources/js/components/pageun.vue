<template>
  <div>

    <div class="container">
      <div class="timetable" style=" margin: 2em;
      border: 1px solid black;
      border-radius: 15px; padding:1.5em;" >
      <div class="">
        <table>
          <thead>
            <th colspan=8>Emploi du temps</th>

            </thead>

            <tbody>
          <tr id="jours">
            <td></td>
            <td>Lundi</td>
            <td>Mardi</td>
            <td>Mercredi </td>
            <td>Jeudi </td>
            <td>Vendredi</td>
            <td>Samedi </td>
            <td>Dimanche</td>
          </tr>

          <tr id="ligne1">
            <td id="h">9h00</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr id="ligne2">
            <td id="h">9h30</td>
            <td></td>
            <td id="news">TD Synthèse d’Image </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr id="ligneligne3">
            <td id="h">10h00</td>
            <td></td>
            <td id="news"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr id="ligne4">
            <td id="h">10h30</td>
            <td></td>
            <td id="news">salle Newsplex </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr id="ligne5">
            <td id="h">11h00</td>
            <td></td>
            <td id="news"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr id="ligne6">
            <td id="h">11h30</td>
            <td></td>
            <td id="admin">Rendez-vous à l’Administration</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr id="ligne7">
            <td  id="h">12h00</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr id="ligne8">
            <td id="h">12h30</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr id="ligne9">
            <td id="h">13h00</td>
            <td></td>
            <td></td>
            <td> </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr id="ligne10">
            <td id="h">13h30</td>
            <td></td>
            <td id="assoc">Réunion avec les associations</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr id="ligne11">
            <td id="h">14h00</td>
            <td></td>
            <td id="assoc"></td>
            <td><td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr id="ligne12">
            <td id="h">14h30</td>
            <td></td>
            <td id="foyer">Pause au Foyer</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>


          </tr>

          <tr id="ligne13">
            <td id="h">15h00</td>
            <td></td>
            <td id="td">TD Théorie des organisations en Bat A</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>

          </tr>

          <tr id="ligne14">
            <td id="h">15h30</td>
            <td></td>
            <td id="td"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr id="ligne15">
            <td id="h">16h00</td>
            <td></td>
            <td id="td"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr id="ligne16">
            <td id="h">16h30</td>
            <td></td>
            <td id="td"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr id="ligne17">
            <td id="h">17h00</td>
            <td></td>
            <td id="td"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr id="ligne18">
            <td id="h">17h30</td>
            <td></td>
            <td id="td"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr id="ligne19">
            <td id="h">18h00</td>
            <td></td>
            <td id="td"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          </tbody>
        </table>
      </div>
    </div>

    </div>



  </div>

</template>


<script>
export default {
  name: "pageun",
  data: function(){
    return{
      test:""
    }
  },


}
</script>


<style scoped>

td {
width:400px;
height: 25px;
border-radius: 8px;
font-size: 15px;
border: solid #f7f8f9 0.1px;
}




#jours{


}
#ligne1{

}
.timetable{
  margin: 2em;
  border: 1px solid black;
  border-radius: 15px;
}
tr>td{
  padding: 3px;
  border-bottom: solid grey 1px;
  margin-top: 0.5em;
}

#news {
  background-color: #98b7ea;

}
#admin{
  background-color:#ede58b;
}
#assoc{
  background-color: #fc6a76;
}
#foyer{
  background-color: #80e5a0;
}
#td{
  background-color:#dec0e8;
}


#h{
vertical-align: top;
}

</style>
