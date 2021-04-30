exports.create = async (req, res) => {
    try {
      // const {name} = req.body;
      // const category = await new Category({name, slug: slugify(name) }).save();
      // res.json(category);
      console.log("$$$$$$$$$$$$$$$ Profile CREATE completed $$$$$$$$$$$$$$");
    } catch (err){
      res.status(400).send('@@@@@Create profile failed@@@@@@');
    }
}