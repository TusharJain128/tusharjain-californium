const authorModel = require("../model/authorModel");
const blogModel = require("../model/blogModel");

const createblog = async function (req, res) {
  try {
    let data = req.body;
    let Id = data.authorId;

    // for required fields
    if (Object.keys(data).length == 0) return res.status(400).send({ status: false, msg: "Object can not be empty" });

    let authId = await authorModel.findById(Id);
    if (!authId) { return res.status(404).send({ status: false, msg: "Author does not exist" }) }


    if (data.isPublished) {
      let date = new Date();
      data["publishedAt"] = date;
    }

    {
      let savedData = await blogModel.create(data);
      return res.status(201).send({ status: true, data: savedData });
    }
  } catch (error) {
    return res.status(500).send({ status: false, msg: error.message });
  }
};

const getBlog = async function (req, res) {
  try {
    let data = req.query
    let { authorId, tags, subcategory, category } = data
    let obj = { isDeleted: false, isPublished: true }

    if (authorId) {
      if (!mongoose.isValidObjectId(authorId)) return res.status(404).send({ status: false, Error: 'Invalid Author ID' })

      let checkAuthor = await authorModel.findById(authorId)
      if (!checkAuthor) return res.status(404).send({ msg: "no author exist" })
      obj.authorId = authorId
    }

    if (category) {
      obj.category = category
    }

    if (tags) {
      obj.tags = tags
    }

    if (subcategory) {
      obj.subcategory = subcategory
    }


    let findData = await blogModel.find(obj)
    if (!findData.length > 0) {
      return res.status(404).send({ msg: "no data found" })
    }
    return res.status(200).send({ msg: findData })
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message })
  }
}

const updateBlog = async function (req, res) {
  try {
    let data = req.body
    let id = req.params.blogId
    if (data.tags == null) {
      return res.status(400).send({ status: false, error: "tags key is mandatory" })
    }
    else if (data.subcategory == null) {
      return res.status(400).send({ status: false, error: "subcategory is mandatory" })
    }
    else {
      let newData = { title: data.title, body: data.body }
      let date = new Date();
      data["publishedAt"] = date;
      data.isPublished = true
      let update = await blogModel.findOneAndUpdate(
        { _id: id, isDeleted: false },
        { $set: newData, $push: { tags: data.tags }, $push: { subcategory: data.subcategory } },
        { new: true }
      )
      res.status(200).send({ status: true, msg: update })
    }
  }
  catch (error) {
    res.status(404).send({ status: false, error: error.massage })
  }
}

module.exports.getBlog = getBlog
module.exports.createblog = createblog
module.exports.updateBlog = updateBlog