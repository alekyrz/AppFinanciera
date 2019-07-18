const { model: Progress } = require('../models/progress')
const { model: Themes } = require('../models/theme')
const { model: Users } = require('../models/user')

const newProgress = async (progressData = {}) => {
  const {
    idUser,
    idTopic,
    idTheme
  } = progressData

  const progress = new Progress({
    idUser,
    idTopic,
    idTheme
  })
  const error = progress.validateSync()
  if (error) throw error

  return progress.save()
}

const updateById = (progressId, progressData) => Progress.findByIdAndUpdate(progressId, progressData)

const deleteById = (progressId) => Progress.findByIdAndDelete(progressId)

const getAll = async () => {
  const allProgress = await Progress.find().lean()
  return allProgress
}

const getById = async (progressId) => {
  const foundProgress = await Progress.findById(progressId).lean()
  return foundProgress
}


module.exports = {
  newProgress,
  updateById,
  deleteById,
  getAll,
  getById
}
