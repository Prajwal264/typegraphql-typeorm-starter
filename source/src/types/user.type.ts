import { ObjectType } from 'type-graphql';
import User from '../entities/user.entity';

@ObjectType()
export class UserResponse extends User {}
