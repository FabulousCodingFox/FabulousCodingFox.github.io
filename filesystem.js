var fileSystem = localStorage.getItem("FILESYSTEM")
if(fileSystem == null){
    fileSystem = {
        "C:": {
            "type": "drive",
            "removable": false,
            "children":{
                "Desktop": {
                    "type": "folder",
                    "removable": false,
                    "children": {
                        "Notes": {
                            "type": "file",
                            "extension": "txt",
                            "content": "This is a text file",
                            "x": 0,
                            "y": 0
                        }
                    }
                }
            }
        }
    }
    localStorage.setItem("FILESYSTEM", JSON.stringify(fileSystem))
}else{
    fileSystem = JSON.parse(fileSystem)
}

//window.onbeforeunload = function(){
//    localStorage.setItem("FILESYSTEM", JSON.stringify(fileSystem))
//}

function FileSystem_getFolder(path){
    var pathArray = path.split("/")
    var current = fileSystem
    pathArray.pop()
    
    for(var i = 0; i < pathArray.length; i++){
        current = current[pathArray[i]]
        if(current == null) return null
        if(current["type"] == null) return null
        if(current["type"] !== "folder" && current["type"] !== "drive" && current["type"] !== "zip") return null
        if(i != pathArray.length - 1) current = current["children"]
        if(current == null) return null
    }

    return current
}


function FileSystem_getDesktop(){
    return FileSystem_getFolder("C:/Desktop/")
}

function FileSystem_getFile(path){  
    var folder = FileSystem_getFolder(path)
    if(folder == null) return null
    var completeFileName = path.split("/").pop()
    var name = completeFileName;
    var extension = ""
    if(completeFileName.contains(".")){
        extension = completeFileName.split(".").pop()
        name = completeFileName.replace("." + extension, "")
    }
    var file = folder[name]
    if(file == null) return null
    if(file["type"] !== "file") return null
    if(file["extension"] !== extension) return null
    return file
}

// Setup Desktop Icons
let temp = FileSystem_getDesktop()["children"]
let temp2 = document.getElementById("desktop-apps")
Object.keys(temp).forEach(element => {
    temp2.insertAdjacentHTML("beforeend", /*html*/`<button style="--x: ${temp[element]["x"]}; --y: ${temp[element]["y"]}"><img src="#"><span>${element}</span></button>`);
})