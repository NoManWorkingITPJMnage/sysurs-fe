import ResourceList from '@/components/ResourceList.vue';
import { shallowMount } from '@vue/test-utils';
import { expect, assert } from 'chai';

/* eslint-disable @typescript-eslint/camelcase */
const resources = [
  {
    res_id: 1,
    res_name: '资源1',
    uploader: 'test1',
    folder_name: '文件夹1',
    approved: true,
    link: '',
  }, {
    res_id: 2,
    res_name: '资源2',
    uploader: 'test1',
    folder_name: '文件夹2',
    approved: false,
    link: '',
  }, {
    res_id: 3,
    res_name: '资源3',
    uploader: 'test2',
    folder_name: '文件夹1',
    approved: true,
    link: '',
  },
];

const wrapper = shallowMount(ResourceList, {
  propsData: {
    dataSource: resources,
  },
});

describe('Test resource list component', () => {
  it('Test if resource list can be correctly presented.', () => {
    const cards = wrapper.element.querySelectorAll('.res-card');
    expect(cards.length).to.equal(3);
    const firstCard = cards[0];
    if (firstCard) {
      const resName = firstCard.querySelector('.res-name');
      assert(!!resName);
      if (resName) {
        expect(resName.innerHTML).to.equal('资源1');
      }
      const folderName = firstCard.querySelector('.folder-name');
      assert(!!folderName);
      if (folderName) {
        expect(folderName.innerHTML).to.equal('文件夹1/');
      }
      const uploader = firstCard.querySelector('.uploader');
      assert(!!uploader);
      if (uploader) {
        expect(uploader.innerHTML).to.equal('FROM test1');
      }
    }
  });
});
