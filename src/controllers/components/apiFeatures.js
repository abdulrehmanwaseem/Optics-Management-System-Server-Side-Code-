class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  populate() {
    const { populateOptions } = this.queryString;

    if (populateOptions) this.query = this.query.populate(populateOptions);
    return this;
  }
  paginate() {
    const { page, perPage } = this.queryString;
    const skip = (parseInt(page || 1) - 1) * parseInt(perPage || 5);
    this.query = this.query.skip(skip).limit(parseInt(perPage));
    return this;
  }

  sort() {
    const { sortBy, sort } = this.queryString;
    this.query = this.query.sort({ [sortBy]: Number(sort) });
    return this;
  }

  search() {
    // const { search, searchBy } = this.queryString;
    // if (search && searchBy) {
    //   const searchQuery = { [searchBy]: new RegExp(search, "i") };
    //   this.query = this.query.find(searchQuery);
    // }
    // return this;

    // For type: Number Also
    const { search, searchBy } = this.queryString;

    if (search && searchBy) {
      let searchQuery = {};
      const isNumberField =
        this.query.model.schema.paths[searchBy]?.instance === "Number";

      if (isNumberField) {
        searchQuery[searchBy] = parseFloat(search);
      } else {
        searchQuery[searchBy] = new RegExp(search, "i");
      }
      console.log(searchQuery);
      console.log(searchBy);
      this.query = this.query.find(searchQuery);
    }

    return this;
  }
}

export default APIFeatures;
