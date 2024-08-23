const db = require('../../app/models')




const methods = {
    create: async (model, data, additional = undefined) => {
        return model.create(data, additional || undefined)
    },
    update: async (model, query, data, additional = undefined) => {
        return model.update(data, query, additional || undefined)
    },
    delete: async (model, query, additional = undefined) => {
        return model.destroy(query, additional || undefined)
    },
    get: async (model, query, additional = undefined) => {
        return model.findOne(query, additional || undefined)
    },
    getAll: async (model, query) => {
        return model.findAll({ ...query })
    },
    getAndCountAll: async (model, query, limit, offset) => {
        return model.findAndCountAll({ ...query, limit, offset })
    },
    getPagination: (page, size) => {
        const limit = size ? +size : 10;
        const offset = page ? page * limit : 0;
        return { limit, offset };
    },
    getPagingData: (alldata, page, limit) => {
        const { count: totalItems, rows: data } = alldata;
        const currentPage = page ? +page : 0;
        const totalPages = Math.ceil(totalItems / limit);
        return { totalItems, data, totalPages, currentPage };
    }

}


module.exports = { methods }