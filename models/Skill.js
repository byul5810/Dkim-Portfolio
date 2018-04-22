var keystone = require('keystone'),
    Types = keystone.Field.Types;

var Skill = new keystone.List('Skill', {
    autokey: { path: 'slug', from: 'title', unique: true },
    map: { name: 'title' },
    track: true,
    defaultSort: 'priority'
});

Skill.add({
    title: { type: String, required: true },
    priority: { type: Types.Number },
    image: { type: Types.Relationship, ref: 'Image'},
    skillCategory: {type: Types.Relationship, ref:'SkillCategory', many:true}
});

Skill.defaultColumns = 'title, priority, slug|20%'
Skill.register();
