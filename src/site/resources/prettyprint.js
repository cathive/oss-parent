jQuery(function($) {
    /*
     * This little snippet is used to automatically add the desired "prettyprint"
     * class definitions to all sourcecode sections that are rendered via the
     * doxia-docbook-simple module.
     */
    $("div.source>pre").addClass("prettyprint linenums:1");
    if (prettyPrint) { prettyPrint() };
});
