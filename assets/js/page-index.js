(function() {
    // Data Blob
    // =============================================================================
    // The main "blob" of site data constructed by liquid
    // We cherry pick to minimize size
    // Also because jsonify doesn't work quite right and collapses the page objects
    // into just strings when we jsonify the whole site
    var pages = [
        
        {
                name: "AdvancedGuide.md",
                title: "Advanced Guide",
                url: "/opendoc-formsg-faq/AdvancedGuide.html",
                escapedPath: "AdvancedGuide.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Form User Guide","",["BasicGuide.md","AdvancedGuide.md","Roadmap.md","AskAPro.md"]]
            },
            
        {
                name: "AskAPro.md",
                title: "Ask a Pro",
                url: "/opendoc-formsg-faq/AskAPro.html",
                escapedPath: "AskAPro.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Form User Guide","",["BasicGuide.md","AdvancedGuide.md","Roadmap.md","AskAPro.md"]]
            },
            
        {
                name: "BasicGuide.md",
                title: "Basic Guide",
                url: "/opendoc-formsg-faq/BasicGuide.html",
                escapedPath: "BasicGuide.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Form User Guide","",["BasicGuide.md","AdvancedGuide.md","Roadmap.md","AskAPro.md"]]
            },
            
        {
                name: "Roadmap.md",
                title: "Feature Roadmap",
                url: "/opendoc-formsg-faq/Roadmap.html",
                escapedPath: "Roadmap.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Form User Guide","",["BasicGuide.md","AdvancedGuide.md","Roadmap.md","AskAPro.md"]]
            },
            
        {
                name: "index.md",
                title: "Form User Guide",
                url: "/opendoc-formsg-faq/",
                escapedPath: "index.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Form User Guide","",["BasicGuide.md","AdvancedGuide.md","Roadmap.md","AskAPro.md"]]
            },
            
        
    ]

    var pageIndex = {}
    var documentList = {}

    pages.forEach(function(page) {
        pageIndex[page.url] = page
        var documentTitle = page.documentInfo ? page.documentInfo[0] : 'root'
        if (documentList[documentTitle]) {
            documentList[documentTitle].push(page)
        } else {
            documentList[documentTitle] = [page]
        }
    })

    // Expose as global var
    root = typeof exports !== 'undefined' && exports !== null ? exports : this

    root.pageIndex = pageIndex;
    root.documentList = documentList;
})()