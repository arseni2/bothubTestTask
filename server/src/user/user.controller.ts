import {Body, Controller, Patch, Req} from '@nestjs/common';
import {UserService} from "./user.service";
import {Roles} from "../role/role-types";
import {Role} from 'src/auth/decorators/role.decorator';
import {UpdateUserDto} from "./dto/update-user.dto";
import {ApiBearerAuth} from '@nestjs/swagger';
import {IRequestWithUser} from "../types";

@ApiBearerAuth()
@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {
	}

	@Role(Roles.User)
	@Patch()
	changeBalance(@Req() req: IRequestWithUser, @Body() updateUserDto: UpdateUserDto) {
		return this.userService.update(req.user.id, updateUserDto)
	}
}
