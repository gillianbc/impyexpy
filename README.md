I have an index.js in the utils folder that will import functions from various files in the utils folder and then re-export them as a job lot of named functions.

I can then import that index.js in my /src/index.js.  I can then run any of the named functions.

Named functions are really useful as the function name could come from a key value pair. 

For example:
<table>
<th>AgeLimit</th><th>Function Name</th>
  <tr><td>12</td><td>showKidsArticles<td><tr>
  <tr><td>18</td><td>showTeenArticles<td><tr>
  <tr><td>30</td><td>showYouthArticles<td><tr>
</table>

