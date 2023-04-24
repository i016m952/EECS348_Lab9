<!DOCTYPE html>

<html>

<body>

<table>

<?php
	$tableSize = $_POST["tableSize"];
 
	echo "<table border='1'>";

	echo "<tr><td> </td>";

	for ($i = '1'; $i <= $tableSize; $i++) {
		echo "<td>". ($i) . "</td>";
	}

	echo "</tr>";

	for ($i = 1; $i <= $tableSize; $i++) {
		echo "<tr>";
		
		echo "<td>" . ($i) . "</td>";

		for ($j = 1; $j <= $tableSize; $j++) {
			echo "<td>" . ($j * $i) . "</td>";
		}   

		echo "</tr>";
	}
?>

</table>

</body>

</html>