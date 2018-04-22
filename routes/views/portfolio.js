var keystone = require('keystone');
var SiteInfo = keystone.list('SiteInfo');
var SkillCategory = keystone.list('SkillCategory');
var Skill = keystone.list('Skill');
var Project = keystone.list('Project');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;


	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'projects';

		view.on('init', function (next) {

			var q = SiteInfo.model.find({}).populate('mainImage profileImage headerImage');

			q.exec(function (err, result) {
				locals.siteinfo = result;
				next(err);
			});


		});
          	// Load filters
          	view.on('init', function (next) {

          		var q = SkillCategory.model.find({}).sort('priority');

          		q.exec(function (err, result) {
          			locals.category = result;
          			next(err);
          		});

          	});
    view.on('init', function (next) {

  		var q = Skill.model.find({}).sort('priority').populate('skillCategory image');

  		q.exec(function (err, result) {
  			locals.skills = result;
  			next(err);
  		});

  	});

		view.on('init', function(next){
			var q = Project.model.find({}).sort('priority').populate('image');

			q.exec(function(err, result){
				locals.projects = result;
				next(err);
			});
		});


	// Render the view
	view.render('portfolio', {layout: 'main'});
};
