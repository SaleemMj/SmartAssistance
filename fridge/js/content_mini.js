var project = {"id":7304,"offlineVersion":{"android":{"expirationDate":1417092188405,"lastUpdate":1416228188405,"shortUrl":"http://goo.gl/HlwTy5","url":"http://s3-eu-west-1.amazonaws.com/studio-live/0000offline/354662/7304/WikitudeStudioAndroidAppTemplate.zip"},"ios":{"expirationDate":1417092188405,"lastUpdate":1416228188405,"shortUrl":"http://goo.gl/vvFdhw","url":"http://s3-eu-west-1.amazonaws.com/studio-live/0000offline/354662/7304/WikitudeStudioiOSAppTemplate.zip"},"plain":{"expirationDate":1417092188405,"lastUpdate":1416228188405,"shortUrl":"http://goo.gl/rXn1ik","url":"http://s3-eu-west-1.amazonaws.com/studio-live/0000offline/354662/7304/WikitudeStudio.zip"}},"targetCollections":{"V2":{"targetCollectionUrl":"wtc/targetcollections_4.x.wtc"},"V1":{"targetCollectionUrl":"wtc/targetcollections_3.x.wtc"},"targetCollectionThumbnailUrl":"http://s3-eu-west-1.amazonaws.com/studio-live/354662/datasets/588ac320-a75e-4ea9-9adc-9bee4c80658d/dataset_gallery.png"},"targetCollectionUrl":"wtc/targetcollections.wtc","lastLocallyStored":"2014-11-17T12:59:14.651Z","targets":[{"id":"0.04274829034693539","augmentations":[{"textColor":{"g":0,"b":0,"r":0,"a":1},"text":"Zanussi Large capacity ZRB935NX2 fridge freezer","backgroundColor":{"g":255,"b":255,"r":255,"a":1},"zoom":1,"width":68.45703125,"type":"Text","zOrder":1000,"id":"bp_aug_1850812","height":1.89520624303233,"rotation":0,"name":"bp_aug_1850812","opacity":100,"clickUrl":"http://newsroom.electrolux.com/uk/2012/04/16/store-more-fresh-food-for-longer-in-a-zanussi-space-fridge-freezer/","textStyle":"","y":2.705817886363207,"x":11.693285528031291},{"zoom":0.4442848728317196,"width":11.324057793855353,"zOrder":1001,"type":"Image","url":"augmentation/images/buy.png","id":"bp_aug_8664255","height":4.829183400344778,"rotation":0,"name":"bp_aug_8664255","opacity":100,"clickUrl":"http://www.appliancesdirect.co.uk/p/zrb935nx2/zanussi-zrb935nx2-free-standing-fridge-freezer","y":19.747703121661512,"x":8.433833116036507},{"zoom":0.5682321284917752,"width":12.208112135565482,"zOrder":1002,"type":"Image","url":"augmentation/images/specs.jpg","id":"bp_aug_2275952","height":7.380049383421607,"rotation":0,"name":"bp_aug_2275952","opacity":73.9,"clickUrl":"http://www.appliance-reviews.co.uk/p/Zanussi-ZRB935NX2-Fridge-Freezers-in-Stainless-Steel-24837/specification","y":10.222107880970757,"x":7.912320730117341},{"zoom":0.5506344007377493,"width":10.862123920803256,"zOrder":1003,"type":"Image","url":"augmentation/images/review_new.jpg","id":"bp_aug_8993477","height":6.230701413030274,"rotation":0,"name":"bp_aug_8993477","opacity":89.6,"clickUrl":"http://www.appliance-reviews.co.uk/p/Zanussi-ZRB935NX2-Fridge-Freezers-in-Stainless-Steel-24837/reviews#tabs","y":26.519805988090102,"x":8.173076923076923},{"videoMode":"fullscreen","zoom":1,"endlessLoop":false,"width":31.4453125,"autoResume":true,"type":"Video","zOrder":1004,"id":"bp_aug_6625053","thumbnail":"default","height":10.089186176142698,"subType":"SocialVideo","rotation":0,"name":"bp_aug_6625053","thumbnailUrl":"http://img.youtube.com/vi/FVL1w4JR_UA/mqdefault.jpg","opacity":100,"autoPlay":false,"src":"https://www.youtube.com/watch?v=FVL1w4JR_UA","y":32.99190841847154,"x":21.471642764015645}],"scaleFactor":0.7490234375,"active":true,"label":"fridge","zoomFactor":100,"size":{"height":1794,"width":1024}}]};

if ( __SDK.checkVersion({minSDKVersion: {ios: "3.2", android: "3.2"}/*, requiredFeatures: ["3d"]*/}) ) {
    var converter = new blueprint.Converter(null, {report : false});
    converter.convertProject(project);
}