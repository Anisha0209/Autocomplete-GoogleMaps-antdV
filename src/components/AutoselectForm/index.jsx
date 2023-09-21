import React from 'react';
import { Typography, Radio, Checkbox, Input, Row, Col } from 'antd';
import 'antd/dist/reset.css'; // Import antd styles
import withAutocomplete from 'components/HOC/GoogleMap/withAutocomplete';
import useShallowEqualSelector from 'helpers/useShallowEqualSelector';
import useAutoselectForm from './hooks/useAutoselectForm';

const AutoselectForm = ({ textboxRef }) => {
  const { keyword } = useShallowEqualSelector(state => state.form);
  const { handleKeywordInput, selectOptions } = useAutoselectForm();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', boxShadow: '1', borderRadius: 2 }}>
      <div style={{ backgroundColor: '#4D90FE', padding: '8px' }}>
        <Typography.Title level={5} style={{ fontWeight: 'bold', color: 'white' }}>
          Autocomplete Map Search
        </Typography.Title>
      </div>
      <div style={{ padding: '8px' }}>
        {/* Radio button section */}
        <Radio.Group defaultValue="" onChange={selectOptions} buttonStyle="solid">
          <Radio.Button value="">All</Radio.Button>
          <Radio.Button value="geocode">Geocode</Radio.Button>
          <Radio.Button value="address">Address</Radio.Button>
          <Radio.Button value="establishment">Establishment</Radio.Button>
          <Radio.Button value="(regions)">Regions</Radio.Button>
          <Radio.Button value="(cities)">Cities</Radio.Button>
        </Radio.Group>
      </div>

      <div style={{ padding: '8px' }}>
        {/* Checkbox section */}
        <Row>
          <Col>
            <Checkbox defaultChecked disabled>
              Bias to map viewport
            </Checkbox>
          </Col>
        </Row>
      </div>

      <div style={{ padding: '8px' }}>
        {/* Autocomplete searchbar section */}
        <Input
          placeholder="Enter a location" 
          value={keyword}
          ref={textboxRef}
          onChange={handleKeywordInput}
        />
      </div>
    </div>
  );
};

export default withAutocomplete(AutoselectForm);
