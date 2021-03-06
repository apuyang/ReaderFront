import React from 'react';
import { mountWithIntl } from 'utils/enzyme-intl';
import RecommendedWork from '@components/RecommendedWork/RecommendedWork';

const work = global.rfMocks.work.work;
const workNormalized = global.rfMocks.work.workNormalized;

it('renders while loading without crashing', () => {
  const wrapper = mountWithIntl(
    <RecommendedWork
      title={'Test 1'}
      work={null}
      description={''}
      isLoading={true}
    />
  );
  expect(wrapper).toBeTruthy();
  wrapper.unmount();
});

it('renders the work', () => {
  const wrapper = mountWithIntl(
    <RecommendedWork
      title={'Test 2'}
      work={workNormalized}
      description={'Desc'}
      isLoading={false}
    />
  );
  expect(wrapper).toBeTruthy();
  wrapper.unmount();
});

it('renders the work without cover', () => {
  const wrapper = mountWithIntl(
    <RecommendedWork
      title={'Test 2'}
      work={work}
      description={'Desc'}
      isLoading={false}
    />
  );
  expect(wrapper).toBeTruthy();
  wrapper.unmount();
});
