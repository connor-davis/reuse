import Database from '../../util/database'
import { setSyllektions } from '../../util/slices/syllektions.slice'

let database = new Database()

export const loadSyllektions = async (dispatch) =>
    dispatch(setSyllektions((await database.getAll('syllektion')) || []))

export const addSyllektion = ({
    syllektions,
    dispatch,
    idNumber,
}) => {}

export const editSyllektion = () => {}

export const completeEdit = () => {}

export const removeSyllektion = () => {}
