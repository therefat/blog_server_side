const articles = [
    {
        id: 1, 
        title: 'This is article 1', 
        body: 'I am Refat Hossen'
    }, 
    {
        id: 2, 
        title: 'Youtube Videos', 
        body: 'rgkdflkgjdf'
    }
]
const getSingelId = (req,res) => {
    const id = req.params.id;
    let data;
    for(let i = 0;i < articles.length;i++){
        if(id == articles[i].id){
            data = articles[i]
            break
        }
    }
    res.json({
        data
    })
}
const getAllArticle = (req,res) => {
    res.json({
        data: articles
    })
}
const createArticle = (req,res) => {
    articles.push(req.body)
    res.json({
        message : "Article created"
    })
}
module.exports = {
    getSingelId,
    getAllArticle,
    createArticle
}