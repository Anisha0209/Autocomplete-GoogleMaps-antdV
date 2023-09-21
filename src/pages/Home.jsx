import React from 'react';
import { Typography } from 'antd';
import 'antd/dist/reset.css';
import { GoogleOutlined } from'@ant-design/icons';

import MapContainer from 'components/GoogleMap/MapContainer';
import AutoselectForm from 'components/AutoselectForm';

import useShallowEqualSelector from 'helpers/useShallowEqualSelector';

//const { Text } = Typography;

const Home = () => {
  const { place } = useShallowEqualSelector(state => state.googleMap);

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
        <div style={{display: 'flex', gap: '16px', padding: '16px' }}><GoogleOutlined />
        <Typography.Title level={4} style={{ marginTop : '8px' , color : 'rgb(0 0 0 / 65%)'}}>Google Maps Platform</Typography.Title></div>
        <div style={{ position: 'relative', height: '100%', width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
            <div style={{ flex: 1 }}>
              <AutoselectForm />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '8px' }}>
              <div style={{fontSize : '23px'}}>We found the search results for:</div>
              <Typography.Title level={5}>Searched Place Name: {place.name || '-'}</Typography.Title>
              <Typography.Title level={5}>Searched Place Address: {place.address || '-'}</Typography.Title>
            </div>
          </div>
          <MapContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
