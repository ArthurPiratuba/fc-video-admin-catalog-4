

import { SearchableRepository } from "../../shared/domain/repository/repository.interface";
import { SearchParams } from "../../shared/domain/repository/search-params";
import { SearchResult } from "../../shared/domain/repository/search-result";
import { Category } from "./category.aggregate";
import { Uuid } from "./uuid.vo";

export type CategoryFilter = string

export class CategorySearchParams extends SearchParams<CategoryFilter> { }

export class CategorySearchResult extends SearchResult<Category> { }

export interface CategoryRepository extends SearchableRepository<
  Category,
  Uuid,
  CategoryFilter,
  CategorySearchParams,
  CategorySearchResult
> { }