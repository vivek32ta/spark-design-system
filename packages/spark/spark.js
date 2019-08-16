// Import all Spark components
import { hugeTextInput } from './base/hugeTextInput';
import { ssnInput } from './base/ssnInput';
import passwordInput from './base/passwordInput';
import { monetaryInput } from './base/monetaryInput';
import { phoneInput } from './base/phoneInput';
import { dateInput } from './base/dateInput';
import { datePicker } from './base/datePicker';
import { modals } from './components/modals';
import { requiredTextInput } from './base/requiredTextInput';
import { requiredTick } from './base/requiredTick';
import { requiredSelect } from './base/requiredSelect';
import { pagination } from './components/pagination';
import { tabs } from './components/tabs';
import { toggle } from './components/toggle';
import { spinners } from './components/spinners';
import { masthead } from './components/masthead';
import { alerts } from './components/alerts';
import { dropdowns } from './components/dropdown';
import { stepper } from './components/stepper';
import { highlightBoard } from './components/highlight-board';

const Spark = ({ datePickerConfig = {} } = {}) => {
  requiredSelect();
  requiredTick();
  requiredTextInput();
  ssnInput();
  passwordInput();
  monetaryInput();
  phoneInput();
  dateInput();
  datePicker(datePickerConfig);
  modals();
  pagination();
  tabs();
  toggle();
  spinners();
  masthead();
  alerts();
  dropdowns();
  stepper();
  highlightBoard();
  hugeTextInput();
};

export { Spark as default };