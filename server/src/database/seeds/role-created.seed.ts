import {Factory, Seeder} from "typeorm-seeding";
import {RoleEntity} from "../../role/entities/role.entity";

export default class CreateRole implements Seeder {
	public async run(factory: Factory): Promise<any> {
		await factory(RoleEntity)().create({name: "user"});
		await factory(RoleEntity)().create({name: "admin"});
	}
}