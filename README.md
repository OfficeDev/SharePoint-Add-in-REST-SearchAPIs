---
topic: sample
products:
- SharePoint
- Office 365
languages:
- ASP
extensions:
  contentType: samples
  technologies:
  - Add-ins
  createdDate: 8/11/2015 2:10:00 PM
---
# Calling the Search REST\OData endpoint in SharePoint Add-ins #

## Summary
Use the Search REST\OData endpoint, in a SharePoint Add-in, to programmatically search content are return the results.

### Applies to ###
-  SharePoint Online and on-premise SharePoint 2013 and later 

### Provided by ###

[Scott Hillier](http://www.shillier.com/default.aspx), [Critical Path Training](http://www.criticalpathtraining.com/Pages/default.aspx)
----------
## Prerequisites ##
This sample requires the following:


- A SharePoint 2013 (or later) development environment that is configured for add-in isolation. (A SharePoint Online Developer Site is automatically configured. For an on premise development environment, see [Set up an on-premises development environment for SharePoint Add-ins](https://msdn.microsoft.com/library/office/fp179923.aspx) ) 


- Visual Studio and the Office Developer Tools for Visual Studio installed on your developer computer 


- Basic familiarity with RESTful web services

## Description of the code ##
The sample accepts a query using the keyword query language (KQL) syntax as an input. It subsequently makes a call to the search engine using the SharePoint search REST\OData endpoint. The results are then displayed in a table, which is built dynamically using JQuery and JavaScript. 

The code that uses the REST\OData endpoint for Search is located in the Add-in.js file of the project. The Default.aspx page of the add-in appears after you install and launch the add-in. When you enter a search term and press Search, the page looks similar to the following.

![The add-in start page with a table showing the result of searching on the term "SharePoint".](/description/fig1.jpg) 



The sample demonstrates the following:


- How to construct a REST\OData query to the Search endpoint. 

- How to parse the JSON-formatted data returned from the SharePoint and how to display it dynamically. 



## To use the sample #

12. Open **Visual Studio** as an administrator.
13. Open the .sln file.
13. In **Solution Explorer**, highlight the SharePoint add-in project and replace the **Site URL** property with the URL of your SharePoint developer site.
14. Press F5.
15. After the add-in installs, the consent page opens. Click **Trust It**.
16. Enter a KQL query string in the text box beside the **Search** button and click the button. In a moment, the page refreshes and the returned data is displayed in a table.


## Troubleshooting

<table border="0" cellspacing="5" cellpadding="5" frame="void" align="left" style="width:601px; height:212px">
<tbody>
<tr style="background-color:#a9a9a9">
<th align="left" scope="col"><strong><span style="font-size:small">Problem </span>
</strong></th>
<th align="left" scope="col"><strong><span style="font-size:small">Solution</span></strong></th>
</tr>
<tr valign="top">
<td><span style="font-size:small">Visual Studio does not open the browser after you press the F5 key.</span></td>
<td><span style="font-size:small">Set the add-in for SharePoint project as the startup project.</span></td>
</tr>

</tbody>
</table>

## Questions and comments

We'd love to get your feedback on this sample. You can send your questions and suggestions to us in the [Issues](https://github.com/OfficeDev/SharePoint_SP-hosted_Add-ins_Tutorials/issues) section of this repository.
  
<a name="resources"/>
## Additional resources

[Get to know the SharePoint 2013 REST service](https://msdn.microsoft.com/library/fp142380.aspx).

[Open Data Protocol](http://www.odata.org/)
 
[OData: JavaScript Object Notation (JSON) Format](http://www.odata.org/developers/protocols/json-format)

[OData: AtomPub Format](http://www.odata.org/developers/protocols/atom-format).

### Copyright ###

Copyright (c) Microsoft. All rights reserved.






This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information, see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
