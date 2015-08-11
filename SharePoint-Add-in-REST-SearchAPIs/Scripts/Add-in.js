// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license at the bottom of this file.


$(document).ready(function () {
    var e = ExecuteOrDelayUntilScriptLoaded(showToolbar, "sp.js");
});

function showToolbar() {
    $("#toolbarDiv").show();
}

function executeQuery(queryTerms) {

    Results = {
        element: '',
        url: '',

        init: function (element) {
            Results.element = element;
            Results.url = _spPageContextInfo.webAbsoluteUrl + "/_api/search/query?querytext='" + queryTerms + "'";
        },

        load: function () {
            $.ajax(
                    {
                        url: Results.url,
                        method: "GET",
                        headers: {
                            "accept": "application/json;odata=verbose",
                        },
                        success: Results.onSuccess,
                        error: Results.onError
                    }
                );
        },

        onSuccess: function (data) {
            var results = data.d.query.PrimaryQueryResult.RelevantResults.Table.Rows.results;
            var html = "<table>";

            for (var i = 0; i < results.length; i++) {
                html += "<tr><td>";
                html += results[i].Cells.results[3].Value;
                html += "</td><td>"
                html += results[i].Cells.results[6].Value;
                html += "</td><tr>";
            }

            html += "</table>";
            Results.element.html(html);
        },

        onError: function (err) {
            alert(JSON.stringify(err));
        }
    }

    Results.init($('#resultsDiv'));
    Results.load();

}


/*

SharePoint-Add-in-REST-SearchAPIs, https://github.com/OfficeDev/SharePoint-Add-in-REST-SearchAPIs
 
Copyright (c) Microsoft Corporation
All rights reserved. 
 
MIT License:
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 
The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.    
  
*/