var keystone = require('keystone'),
    Types = keystone.Field.Types;

var Project = new keystone.List('Project', {
  autokey: {path: 'slug', from: "title", unique:true},
  map:{ name: 'title'},
  defaultSort: 'title'
});

Project.add({
  title: {type: String, required: true},
  priority: {type: Types.Number},
  snippet: { type: Types.Textarea },
  image: { type: Types.Relationship, ref:'Image'}
});


Project.defaultColumns = 'title, priority, slug|20%'
Project.register();
