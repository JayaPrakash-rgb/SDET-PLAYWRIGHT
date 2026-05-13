//4 .Recursive Navigation Type
//Scenario: You are building a tree structure for a file system or a sidebar menu.
//Task: Define a type FolderNode that has a name: string. It should also have an optional files: string[] and an optional subFolders property, which is an array of FolderNode objects.


type FolderNode={
    name:string,
    files? :string[],
    subFolders? :FolderNode[]
}
const folder:FolderNode={
    name:"SDET PLAYWRIGHT",
    subFolders: [{
        name:"Day1",
        files:["index.js","pracday1.js"]
    },{
        name:"Day2",
        files:["app.js","index2.js"]
    },{
        name:"Day3",
        files:["prac10.js"]
    }
]
}
console.log(folder.subFolders);
