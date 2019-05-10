import React from 'react';
import NormalizedLayout from '../components/NormalizedLayout';

export default () => (
  <NormalizedLayout>
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1
        style={{
          display: 'inline-block',
          margin: 0,
          fontFamily:
            '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
        }}
      >
        Ja
      </h1>
    </div>
  </NormalizedLayout>
);
