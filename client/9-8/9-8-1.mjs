const viewRecords = [
    {
    ID: 1,
    Name: "山田",
    Age: 23,
    Postcode: "0620055",
    Address: "北海道札幌市",
    AverageScore: 81.5,
    },
    {
    ID: 2,
    Name: "田中",
    Age: 18,
    Postcode: "0590465",
    Address: "北海道登別市",
    AverageScore: 71,
    },
    ]
    /**
    * ウィンドウ読み込み時の処理
    */
    window.onload = () => {
    const sample3Body = document.getElementById("981-body")
    sample3Body.innerHTML = ""
    for (const record of viewRecords) {
    const tr = document.createElement("tr")
    sample3Body.appendChild(tr)
const IDTd = document.createElement("td")
IDTd.appendChild(document.createTextNode(record.ID))
tr.appendChild(IDTd)
const NameTd = document.createElement("td")
NameTd.appendChild(document.createTextNode(record.Name))
tr.appendChild(NameTd)
const AgeTd = document.createElement("td")
AgeTd.appendChild(document.createTextNode(record.Age))
tr.appendChild(AgeTd)
const PostcodeTd = document.createElement("td")
PostcodeTd.appendChild(document.createTextNode(record.Postcode))
tr.appendChild(PostcodeTd)
const AddressTd = document.createElement("td")
AddressTd.appendChild(document.createTextNode(record.Address))
tr.appendChild(AddressTd)
const AverageScoreTd = document.createElement("td")
AverageScoreTd.appendChild(document.createTextNode(record.AverageScore))
tr.appendChild(AverageScoreTd)
}
}
