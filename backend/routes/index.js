
import Account from './account.js'
import Patients from './patient.js'
import Diagnosis from './diagnosis.js'
import Settings from './settings.js'
 
const mountRoutes = (app) => {
  app.use('/api/account', Account)
  app.use('/api/patient', Patients)
  app.use('/api/diagnosis', Diagnosis)
  app.use('/api/settings', Settings)
}
 
export default mountRoutes