const folders = [
  {
    folder_id: 1, 
    folder_name: '文件夹1',
    creator: 'test1',
  }, {
    folder_id: 2, 
    folder_name: '文件夹2',
    creator: 'test2',
  }
];

const resources = [
  {
    res_id: 1,
    res_name: '资源1',
    uploader: 'test1',
    folder_id: 1,
    approved: true,
    link: '',
  }, {
    res_id: 2,
    res_name: '资源2',
    uploader: 'test1',
    folder_id: 2,
    approved: false,
    link: '',
  }, {
    res_id: 3,
    res_name: '资源3',
    uploader: 'test2',
    folder_id: 1,
    approved: true,
    link: '',
  }
];

module.exports = {
  'POST /api/resources': (req, res) => {
    if (req.query.hasOwnProperty('user')) {
      const queryUser = req.query['user'];
      if (queryUser === 'all') {
        res.status(200).json(
          resources
            .filter(resource => resource.approved)
            .map(resource => 
              resource.folder_name = folders.find(folder =>
                folder.folder_id === resource.folder_id
              ).folder_name
            )
        );
      } else {
        res.status(200).json(
          resources
            .filter(resource => resource.uploader === queryUser)
            .map(resource => 
              resource.folder_name = folders.find(folder =>
                folder.folder_id === resource.folder_id
              ).folder_name
            )
        );
      }
    } else if (req.query.hasOwnProperty('resource_id')) {
      const id = req.query['resource_id'];
      const result = resources.find(resource => resource.res_id === id);
      result.folder_name = folders.find(
        folder => folder.folder_id === result.folder_id
      ).folder_name;
      res.status(200).json(result);
    } else {
      res.status(200).json(resources);
    }
  },
};