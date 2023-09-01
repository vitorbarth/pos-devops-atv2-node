const chai = require('chai');
const subSet = require('chai-subset');

const index = require('../index');

chai.use(subSet);

describe('Testes unitários', () => {
    it('tarefaExiste', () => {
        index.addTarefa("aaa");
        index.addTarefa("bbb");
        index.addTarefa("ccc");
        let result = index.tarefaExiste("aaa");
        chai.expect(result).to.be.equals(true);
    });
});