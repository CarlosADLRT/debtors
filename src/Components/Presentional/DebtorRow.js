import React, { useState } from 'react';
import { format } from 'date-fns';
import { moneyFormatter } from '../../Utils/Utils';
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem
} from 'reactstrap';
import AddNewPay from '../Modals/AddNewPay';
import AddNewDebtModal from '../Modals/AddNewDebtModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faEdit,
  faEye,
  faDollarSign
} from '@fortawesome/free-solid-svg-icons';

export default function DebtorRow(props) {
  const [dropDownOpen, setDropdownOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [addDebtModal, setAddDebtModal] = useState(false);
  return (
    <tr key={props.row._KEY}>
      <td>{props.row.debtor}</td>
      <td>{format(props.row.start, 'DD/MM/YYYY')}</td>
      <td>{props.row.tax * 100}%</td>
      <td>{moneyFormatter(props.row.debt)}</td>
      <td>{moneyFormatter(props.row.taxesDebt)}</td>
      <td>
        <Dropdown
          isOpen={dropDownOpen}
          toggle={() => setDropdownOpen(!dropDownOpen)}
        >
          <DropdownToggle caret>Acciones</DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => setModal(!modal)}>
              <FontAwesomeIcon className="mr-2" icon={faDollarSign} />
              Agregar pago
            </DropdownItem>
            <DropdownItem onClick={() => setModal(!modal)}>
              <FontAwesomeIcon className="mr-2" icon={faEye} />
              Ver pagos
            </DropdownItem>
            <DropdownItem onClick={() => setAddDebtModal(!addDebtModal)}>
              <FontAwesomeIcon className="mr-2" icon={faTrash} />
              Agregar Prestamo
            </DropdownItem>
            <DropdownItem>
              <FontAwesomeIcon className="mr-2" icon={faEdit} />
              Editar
            </DropdownItem>
            <DropdownItem>
              <FontAwesomeIcon className="mr-2" icon={faTrash} /> Borrar
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </td>
      {modal && (
        <AddNewPay
          debt={props.row._KEY}
          open={modal}
          toggle={() => setModal(!modal)}
        />
      )}
      {addDebtModal && (
        <AddNewDebtModal
          debt={props.row}
          open={addDebtModal}
          toggle={() => setAddDebtModal(!addDebtModal)}
        />
      )}
    </tr>
  );
}
