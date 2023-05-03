import React from 'react';
import { useIntl } from 'react-intl';
import { Box, Stack, TextInput } from '@strapi/design-system';
import { useCMEditViewDataManager } from '@strapi/helper-plugin';

const FieldsArray = ({
  description,
  disabled,
  error,
  intlLabel,
  name,
  onChange,
  placeholder,
  required,
  value,
  ...props
}) => {
  const { formatMessage } = useIntl();
  const { modifiedData: { Beds = 1, Shared = false, ...values } } = useCMEditViewDataManager()
  let $value = values[name] ? JSON.parse(values[name]) : []
  if($value == null) $value = []
  const handleInputChange = (i) => (event) => {
    $value[i] = event.target.value
    onChange({target: {name, value: JSON.stringify($value), type: 'json' }})
  }
  return (
    <Stack spacing={1}>
      {(Shared ? Array(Beds).fill(0) : [0]).map((_i, i) => (
        <TextInput
          {...{ disabled, error, required }}
          hint={description ? formatMessage(description) : ''}
          label={(i === 0 && intlLabel) ? formatMessage(intlLabel) : '-'}
          name={`${name}-${i}`}
          onChange={handleInputChange(i)}
          placeholder={Shared ? `Google Calendar ID - Bed ${i + 1}` : 'Google Calendar ID'}
          value={$value[i] || ''}
        />
      ))}
    </Stack>
  );
};
export default FieldsArray;