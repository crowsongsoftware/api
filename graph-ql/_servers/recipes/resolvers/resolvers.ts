const resolvers = {
    Query: {
      id: () => `1`,
      name: () => `Tomatoe Sauce`,
      prepTme: () => `30 minutes`,
      cookTime: () => `2 hours`,
      totalTime: () => `2 hours 30 minutes`,
      servings: () => `n/a`,
      yield: () => `3 quarts`,
      description: () => `Basic tomatoe sauce`,
      ingredients: () => [
        ``
      ],
      directions: () => [
        ``
      ],
      nutrionalInformation: () => [
        ``
      ]
    }
  };

  export default resolvers;