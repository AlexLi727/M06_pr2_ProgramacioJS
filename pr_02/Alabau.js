let Lista = document.getElementById("taula_propietats");
Lista.innerHTML = `
<table style = 100%>
<tr>
<th> 1 </th> <th> 2 </th>
</tr>

<tr>
<td>Valor máxim que pot tenir un número JS</td>
<td>`+Number.MIN_VALUE+`</td>
</tr>

<tr>
<td>Altura total de la pantalla</td> 
<td>`+screen.Height+`</td>
</tr>

<tr>
<td> Altura interna de la finestra </td>
<td>

<tr>
<td>URL de la web</td>
<td>`+document.URL+`</td>
</table>

`;