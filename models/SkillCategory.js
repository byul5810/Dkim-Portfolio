var keystone = require('keystone'),
    Types = keystone.Field.Types;

var SkillCategory = new keystone.List('SkillCategory', {
    autokey: { path: 'slug', from: 'title', unique: true },
    map: { name: 'title' },
    defaultSort: 'title'
});

SkillCategory.add({
    title: { type: String, required: true },
    priority: { type: Types.Number }
});

SkillCategory.defaultColumns = 'title, slug|20%'
SkillCategory.register();
