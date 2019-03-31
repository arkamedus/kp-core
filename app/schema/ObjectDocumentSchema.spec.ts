import {expect} from 'chai';
import {FieldSchema} from "./FieldSchema";
import {ObjectDocumentSchema} from './ObjectDocumentSchema';


describe('ObjectDocumentSchema', () => {

	let doc = new ObjectDocumentSchema(
		{
			"type": "TestSchema",
			fields: [
				new FieldSchema({"name": "title", "type": "text"}),
				new FieldSchema({"name": "property", "type": "text"})
			]
		});

	it('should be created', () => {
		expect(doc).not.equal(undefined);
		expect(doc.type).to.equal("TestSchema");

	});

	it('should return a blank from factory with no params', function (done) {
		let timeout = 500;

		setTimeout(function(){
			let doc2 = doc.factory();
			console.log(doc2);
			expect(doc2.type).to.equal("TestSchema");
			console.log('time diff',doc2.created - doc.created);
			expect(doc2.created).to.be.above((doc.created+timeout)-1);
			expect(doc2.fields.length).to.equal(2);
			done();

		},timeout);

	});

	it('should return initialize with a MongoClientDBStream', function (done) {
		done();
	});

	it('should return searched threads', (done) => {

		done();

	});

	it('should close', (done) => {
		done();
	});

});