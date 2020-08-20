import React from 'react';
import { DSDataGrid } from '@elliemae/ds-datagrids';
import DSToolbar, { ToolbarItem } from '@elliemae/ds-basic/Toolbar';
import DSDropdownMenu from '@elliemae/ds-dropdownmenu';
import DSButton from '@elliemae/ds-basic/Button';
import PhoneOutline from '@elliemae/ds-icons/PhoneOutline';
import EditPencil from '@elliemae/ds-icons/EditPencil';
import DSTooltip from '@elliemae/ds-basic/Tooltip';
import editableColumns from './editableColumns';
import { randomEntities } from '../utils/randomData';

const rows = randomEntities(100);

const options = [
  {
    id: '1',
    label: 'option 1',
    customRenderer: (
      <DSTooltip
        triggerComponent={
          <DSButton labelText="Custom render" buttonType="link" />
        }
        interactionType="hover"
        title="Click to copy"
        zIndex={1000}
      />
    ),
  },
  {
    id: '2',
    label: 'option 2',
  },
  {
    id: '3',
    label: 'option 3',
  },
];

export default () => {
  return (
    <DSDataGrid
      columns={editableColumns}
      rows={rows}
      searchFilters
      sortable
      editable
      fluidHeight
      resizeableColumns
      renderToolbar={({ rowData }) => (
        <DSToolbar>
          <ToolbarItem
            disabled={rowData.defaultDisposition}
            icon={<EditPencil />}
          />
          <ToolbarItem
            icon={
              <DSDropdownMenu
                options={options}
                type="phone"
                triggerComponent={
                  <DSButton
                    buttonType="link"
                    icon={<PhoneOutline />}
                  />
                }
              />
            }
          />
        </DSToolbar>
      )}
    />
  );
};